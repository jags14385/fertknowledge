import { gql, useQuery } from "@apollo/client";
import { Badge } from "./shared/Badge";
import { List, ListItem } from "./shared/List";

const FERTLIZER_INFO_QUERY = gql`
  query SearchFertilizerQuery($match: String) {
    fertilizer_info(where: { product: { _ilike: $match } }) {
      product_no
      product
    }
  }
`;

export default function FertilizerInfo({ newFertilizers }) {
  const { loading, error, data } = useQuery(FERTLIZER_INFO_QUERY);

  const renderFertlizers = (fertilizers) => {
    return fertilizers.map(({ product_no, product }) => (
      <ListItem>
        {product_no} || <Badge>{product}</Badge>
      </ListItem>
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <List>{renderFertlizers(newFertilizers || data.fertilizers)}</List>;
}
