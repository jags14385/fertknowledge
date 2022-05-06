import { Badge } from "./shared/Badge";
import { List, ListItem } from "./shared/List";

export default function FertilizerInfo({ newFertilizers }) {
  const renderDetail = (product_constitutents_details) => {
    return product_constitutents_details.map((item, index) => {
      return (
        <div key={`${item.constitutents_detail.chemical_group}_${index}`}>
          <div>{item.constitutents_detail.chemical_group}</div>
          <div>{item.constitutents_detail.constituent_name}</div>
          <div>{item.constitutents_detail.constituent_code}</div>
        </div>
      );
    });
  };
  const renderFertlizers = (fertilizers) => {
    if (!fertilizers) {
      return <span>No fertilizers</span>;
    }
    return fertilizers.map(
      ({ product_no, product, product_constitutents }, index) => {
        const product_constitutents_details = product_constitutents.map(
          (item) => item
        );

        return (
          <ListItem key={index}>
            {product_no} || <Badge>{product}</Badge> ||{" "}
            {renderDetail(product_constitutents_details)}
          </ListItem>
        );
      }
    );
  };
  return <List>{renderFertlizers(newFertilizers)}</List>;
}
