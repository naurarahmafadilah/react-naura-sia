import ErrorPage from "../components/ErrorPage";

const NotFound = () => {
  return (
    <ErrorPage
      code="404"
      title="Page Not Found"
      description="Ups! Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan."
      image="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
    />
  );
};

export default NotFound;