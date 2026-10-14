export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLorem = () => async (dispatch) => {
  dispatch({ type: FETCH_LOREM_REQUEST });

  try {
    const response = await fetch("https://api.lorem.com/ipsum");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    const data = (result && result.data) || result;
    const content = Array.isArray(data) ? data[0] : data;

    dispatch({
      type: FETCH_LOREM_SUCCESS,
      payload: {
        title: content.Title != null ? content.Title : content.title,
        body: content.Body != null ? content.Body : content.body,
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_LOREM_FAILURE,
      payload: error.message || "Unable to fetch Lorem Ipsum content.",
    });
  }
};
