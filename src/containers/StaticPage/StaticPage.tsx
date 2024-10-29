import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { axiosApi } from '../../axiosApi';

const initialState = {
  content: '',
  title: '',
};

const StaticPage = () => {
  const { name } = useParams();
  const [currentPage, setCurrentPage] = useState(initialState);

  let page;
  const fetchPageData = useCallback(async () => {
    try {
      const { data } = await axiosApi.get(`/pages/${name}.json`);
      if (data) {
        setCurrentPage(data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [name]);

  useEffect(() => {
    void fetchPageData();
  }, [fetchPageData]);

  if (name) {
    page = (
      <div>
        <Typography variant="h2" component="h2">
          Page Name is {currentPage.title}
        </Typography>
        <Typography variant="h4" component="h4">
          {currentPage.content}
        </Typography>
      </div>
    );
  } else {
    page = (
      <div>
        <Typography variant="h2" component="h2">
          Home
        </Typography>
        <Typography variant="h4" component="h4">
          A home means so much, with support, security, and lots and lots of love. It is a place that helps you through
          the bad times and supports you in the good, and you could never feel as good anywhere, as in your home. It is
          a loving place with laughter and joy, with food, water, and a good roof, of course.
        </Typography>
      </div>
    );
  }

  return page;
};

export default StaticPage;
