import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

  const handleBackClick = () => {
    // Navigate to home page and scroll to discover section
    navigate('/', { state: { scrollToDiscover: true } });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      <Button
        variant="ghost"
        className="flex items-center gap-2 text-estate-600 hover:text-estate-800"
        onClick={handleBackClick}
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Volver Atras</span>
      </Button>
    </div>
  );
};

export default BackButton;