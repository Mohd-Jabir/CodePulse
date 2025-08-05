import { CircleLoader } from 'react-loaderkit';
import '../Styles/Loader.css'; // Assuming this path is correct for your project

const Loader = () => {
  return (
    // The loader-container div is crucial for centering the loader using the provided CSS
    <div className="loader-container">
      <CircleLoader
        size={59}
        color="#e95096" // Black color as specified in the CSS context
        speed={1}
      />
    </div>
  );
}

export default Loader;
