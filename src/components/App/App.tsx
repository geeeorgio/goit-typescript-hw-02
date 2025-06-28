import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchData } from "../../service/unsplashApi.ts";
import type { UnsplashPhoto } from "../../types/imagesType.ts";
import type { FetchDataResponse } from "../../types/apiType.ts";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../Images/ImageGallery/ImageGallery";
import ErrorMessage from "../Custom/ErrorMessage/ErrorMessage";
import Loader from "../Custom/Loader/Loader";
import LoadMoreBtn from "../Custom/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../Images/ImageModal/ImageModal";

import "./App.css";

function App() {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pagesLeft, setPagesLeft] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!searchQuery) return;

    const getPhotos = async (): Promise<void> => {
      setLoading(true);

      try {
        const { results, total_pages }: FetchDataResponse = await fetchData(
          searchQuery,
          page
        );

        if (results.length === 0 && page === 1) {
          setPhotos([]);
          setErrMsg("No images found for this query.");
          setError(true);
          return;
        }

        setPhotos((prev) => [...prev, ...results]);
        const hasMore = page < total_pages;
        setPagesLeft(hasMore);

        if (!hasMore) {
          toast.error("Sorry, no more images found");
        }
      } catch (err: unknown) {
        setErrMsg(err.message || "Something went wrong");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, [page, searchQuery]);

  useEffect(() => {
    setError(false);
    setErrMsg("");
  }, [searchQuery]);

  const handleSearchSubmit = (query: string): void => {
    setPhotos([]);
    setPage(1);
    setSearchQuery(query);
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />

      {photos.length > 0 && (
        <ImageGallery photos={photos} handleModal={openModal} />
      )}

      {photos.length === 0 && !loading && error && (
        <ErrorMessage errorMessage={errMsg} />
      )}

      {loading && <Loader />}

      {photos.length > 0 && pagesLeft && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </>
  );
}

export default App;
