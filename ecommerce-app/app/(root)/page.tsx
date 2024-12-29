const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
const HomePage = async () => {
    await delay(2000)
  return (
    <>
      <>Latest Products</>
    </>
  );
};

export default HomePage;
