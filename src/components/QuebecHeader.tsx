
import { FleurDeLis } from "./FleurDeLis";

const QuebecHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <FleurDeLis className="h-10 w-10 text-quebec-blue" />
          <h1 className="ml-3 text-3xl font-bold text-quebec-blue">Québec</h1>
        </div>
      </div>
    </header>
  );
};

export default QuebecHeader;
