import {useRouter} from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  console.log(router.query.newsId);

  return (
      <div>
        <h1>News Detail Page</h1>
      </div>
  );
};

export default DetailPage;
