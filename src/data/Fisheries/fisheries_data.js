const GetFisheries = async () => {
  const response = await fetch('https://github.com/theabr-org/coding-challenge-server');

  return response.json();
};

export { GetFisheries };
