import { Badge } from "./shared/Badge";
import { List, ListItem } from "./shared/List";

export default function FertilizerInfo({ newFertilizers }) {
  console.log("newFertilizers", newFertilizers);
  const renderFertlizers = (fertilizers) => {
    if (!fertilizers) {
      return <span>No fertilizers</span>;
    }
    return fertilizers.map(({ product_no, product }) => (
      <ListItem>
        {product_no} || <Badge>{product}</Badge>
      </ListItem>
    ));
  };
  return <List>{renderFertlizers(newFertilizers)}</List>;
}
