import axios from "axios";
import {
  EQRecommendedPropertyFORKSA,
  EQRecommendedPropertyFORInternational,
} from "../utils";

/**
 * Get the search masters
 * @return result: TResultSet
 */
export const getRecommendedKSAProperties = async () => {
  let result = {
    status: false,
    data: [],
  };
  try {
    const response = await axios.post(
      `${process.env.VUE_APP_ELASTIC_SEARCH_SERVICE_END_POINT}`,
      EQRecommendedPropertyFORKSA
    );
    const { hits } = response.data.hits;
    result.status = true;
    result.data = hits;
  } catch (error) {
    result.status = false;
    result.data = [];
  }
  return result;
};

/**
 * Get the search masters
 * @return result: ResultSet
 */
export const getRecommendedInternationalProperties = async () => {
  let result = {
    status: false,
    data: [],
  };
  try {
    const response = await axios.post(
      `${process.env.VUE_APP_ELASTIC_SEARCH_SERVICE_END_POINT}`,
      EQRecommendedPropertyFORInternational
    );
    const { hits } = response.data.hits;
    result.status = true;
    result.data = hits;
  } catch (error) {
    result.status = false;
    result.data = [];
  }
  return result;
};
