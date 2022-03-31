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

export default Fertlizer;
