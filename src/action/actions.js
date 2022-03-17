export const GET_FOOD_BANNERS = "GET_FOOD_BANNERS";

const API_URL = "http://tutofox.com/foodapp/api.json";

export const getFoodBanner = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      if(json){
          dispatch({
              type: GET_FOOD_BANNERS,
              payload: json,
          });
      }else{
          console.log('unable to fetch')
      }
    };
  } catch (error) {}
};
