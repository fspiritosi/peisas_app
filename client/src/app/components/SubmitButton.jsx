import {Loader} from './Loader';

export function SubmitButton({buttonText, isLoading}){
    return (
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        {isLoading ? <Loader /> : buttonText}
      </button>
    );
}