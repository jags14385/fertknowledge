import { gql, useQuery } from "@apollo/client";
import { Badge } from "./shared/Badge";
import { ListItem } from "./shared/List";

const FERTLIZER_INFO_QUERY = gql`
  {
    fertilizer_info(where: { product_no: { _eq: 91556 } }) {
      product_no
      product
      product_constitutents {
        constitutent_code
        constitutent_type
        constitutent_amount
        constitutent_units
        constitutents_detail {
          constituent_code
          constituent_name
          chemical_group
        }
      }
    }
  }
`;

export default function FertilizerInfo() {
  const { loading, error, data } = useQuery(FERTLIZER_INFO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.fertilizer_info.map(
    ({ product, product_no, product_constitutents }, index) => (
      <ListItem key={index}>
        <p>
          {product_no} | <Badge> {product} </Badge>
        </p>
      </ListItem>
    )
  );
}
