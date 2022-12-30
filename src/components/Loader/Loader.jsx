import { BallTriangle } from 'react-loader-spinner';
import { LoadWrapp } from 'components/Loader/Loader.styled';

export const Loader = () => {
  return (
    <LoadWrapp>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoadWrapp>
  );
};
