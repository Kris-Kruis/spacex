import 'babel-polyfill';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql',
  cache: new InMemoryCache()
});

export const FetchMissions = () => {
  return client.query({
    query: gql`
      query {
        missions {
          id
          name
          description
        }
      }
    `
  })
  .then(response => response?.data?.missions);
};

export const FetchMissionDetails = (id) => {
  if (!id) {
    return null;
  }

  return client.query({
    query: gql`
      query {
        mission(id: "${id}") {
          id
          name
          description
          manufacturers
          payloads {
            id
            customers
            manufacturer
            nationality
            orbit
            payload_mass_kg
            payload_type
            reused
          }
          twitter
          website
          wikipedia
        }
      }
    `
  })
  .then(response => response?.data?.mission);
};

export const FetchRockets = () => {
  return client.query({
    query: gql`
      query {
        rockets {
          id
          name
          country
          description
        }
      }
    `
  })
  .then(response => response?.data?.rockets);
};

export const FetchLaunches = () => {
  return client.query({
    query: gql`
      query {
        launches {
          id
          mission_name
          launch_date_utc
          details
        }
      }
    `
  })
  .then(response => response?.data?.launches);
};
