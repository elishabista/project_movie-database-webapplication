import axios from 'axios';
import { useQuery } from 'react-query';

const fetchData = async (url:string) => {
  const response = await axios.get(url);
  return response.data;
};

const ApiComponent = ({ url}) => {
  const { data, isLoading, isError } = useQuery(url, () => fetchData(url));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      {/* Render your data here */}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiComponent;
