import axios from "axios";

export const resolvers = {
  Query: {
    weatherReport: async (_, args) => {
      // TODO: Error handling
      const { data = {} } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${args.city}&appid=${process.env.API_KEY}&lang=en&units=metric`
      );

      const {
        name: cityName,
        main: { temp: temperature },
        weather,
      } = data;

      const [{ id, description, status, icon } = {}] = weather;

      return {
        city: cityName,
        temperature,
        date: new Date(),
        weatherCondition: {
          id,
          description,
          status,
          icon,
        },
      };
    },
  },
};
