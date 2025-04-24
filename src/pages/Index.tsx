
import ResumeForm from '../components/ResumeForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">LaTeX Resume Generator</h1>
        <ResumeForm />
      </div>
    </div>
  );
};

export default Index;
