export const LocalStorageManager = {
    load: () => {
      const storedTrips = localStorage.getItem("trips");
      return storedTrips ? JSON.parse(storedTrips) : [];
    },
  
    save: (trips) => {
      localStorage.setItem("trips", JSON.stringify(trips));
    },
  };