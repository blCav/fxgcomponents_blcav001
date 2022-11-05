import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export const MyBasicBreadcrumbs = ({ separator, url, item }) => {
  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs maxItems={item} separator={separator} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href={url}>
            Home
          </Link>
          <Link underline="hover" color="inherit" href={url}>
            Product
          </Link>
          <Link underline="hover" color="inherit" href={url}>
            Shop
          </Link>
          <Link underline="hover" color="inherit" href={url}>
            Contact
          </Link>
        </Breadcrumbs>
      </div>
    </>
  );
};

MyBasicBreadcrumbs.propTypes = {
  separator: PropTypes.string,
  url: PropTypes.string,
  item: PropTypes.number,
};