import { Badge } from "./shared/Badge";
import { List, ListItem } from "./shared/List";

export default function FertilizerInfo({ newFertilizers }) {
  console.log("newFertilizers", newFertilizers);
  const renderFertlizers = (fertilizers) => {
    if (!fertilizers) {
      return <span>No fertilizers</span>;
    }
    return fertilizers.map(({ product_no, product, product_constitutents }) => (
      <ListItem>
        {product_no} || <Badge>{product}</Badge> ||
        {/* {product_constitutents.map(({ constitutents_detail }) =>
          constitutents_detail.array(
            ({ constituent_code, constituent_name, chemical_group }) => (
              <ListItem>
                <Badge>{constituent_code}</Badge>
                <Badge>{constituent_name}</Badge>
                <Badge>{chemical_group}</Badge>
              </ListItem>
            )
          )
        )} */}
      </ListItem>
    ));
  };
  return <List>{renderFertlizers(newFertilizers)}</List>;
}
