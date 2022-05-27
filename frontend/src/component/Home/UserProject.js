import React, { Fragment, useEffect ,useState } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import axios from "axios";




const UserProject = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // const alert = useAlert();
  // const dispatch = useDispatch();
  // const { loading, error, products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.products);
  const [product,setProduct] = useState({});
  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }
    // dispatch(getProduct());
    //console.log(user);
    async function getProject() {
      const res = await axios.get(`/api/v1/user/project/${user._id}`);
      //console.log(res.data);
      setProduct(res.data);
    }
    getProject();

  }, []);
//console.log(product);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="My Projects" />

          <h2 className="homeHeading">My Projects</h2>

          <div className="container" id="container">
            {product.user &&
              product.user.map((prod) => (
                <ProductCard key={prod._id} product={prod} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserProject;
