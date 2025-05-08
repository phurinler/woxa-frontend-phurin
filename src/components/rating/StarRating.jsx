import { Star } from "lucide-react";
import { Badge } from "../ui/badge";

const StarRating = ({ score }) => {
  return (
    <Badge variant="outline" className="border-green-700">
      <span className="text-green-700 text-base font-medium">{score}</span>
      <Star className="text-green-700" size={16} />
    </Badge>
  );
};

export default StarRating;
