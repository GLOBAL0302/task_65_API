import { constants } from '../../CONSTANTS';
import { Box, Button, Grid2, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { axiosApi } from '../../axiosApi';
import { useNavigate } from 'react-router-dom';

const initialState = {
  title: '',
  content: '',
};

const EditPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState('');
  const [pageData, setPageData] = useState(initialState);

  const onFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await axiosApi.put(`/pages/${page}.json`, pageData);
    navigate(`/${page}`);
  };

  const handlePageChange = (e: SelectChangeEvent) => {
    setPage(e.target.value);
  };

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchPageData = useCallback(async () => {
    console.log(page);
    const { data } = await axiosApi.get(`/pages/${page}.json`);
    setPageData(data);
  }, [page]);

  useEffect(() => {
    if (page) {
      void fetchPageData();
    }
  }, [page, fetchPageData]);
  return (
    <Box component="form" mt={5} onSubmit={onFormSubmit}>
      <InputLabel id="selectPage">Edit Page</InputLabel>
      <Select labelId="selectPage" id="selectPage" label="selectPage" onChange={handlePageChange} value={page}>
        {constants.map((page, index) => (
          <MenuItem key={index} value={page}>
            {page}
          </MenuItem>
        ))}
      </Select>
      <Grid2 container flexDirection={'column'} gap={3} mt={5}>
        <Grid2>
          <TextField
            value={pageData.title}
            onChange={handleDataChange}
            fullWidth
            name="title"
            id="title"
            label="title"
            variant="outlined"
          />
        </Grid2>
        <Grid2>
          <TextField
            value={pageData.content}
            onChange={handleDataChange}
            fullWidth
            name="content"
            id="content"
            label="content"
            variant="outlined"
          />
        </Grid2>
        <Button variant="contained" color="success" type="submit">
          Save
        </Button>
      </Grid2>
    </Box>
  );
};

export default EditPage;
