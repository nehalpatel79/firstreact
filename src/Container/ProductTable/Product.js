import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";

function Product() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [short, setShort] = useState("");
  const [uniquedata, SetUniquedata] = useState([]);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState("1");

  const itemPage = 5;
  const totalPage = Math.ceil(data?.length / itemPage);
  console.log(itemPage, totalPage);

  const getData = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();

      const x = data.map((v) => v.category);
      const c = [...new Set(x)];

      SetUniquedata(c);

      setData(data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
  setCurrentPage(1);
}, [search, short, category]);


 const handlePrev =()=>{
    if(currentPage>1){
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext =()=>{
    if (currentPage < totalPage){
       setCurrentPage(currentPage + 1)
    }
  }

 
  


  const fillterData = () => {
    const categorisedData = category
      ? data.filter((v) => v.category === category)
      : data;

    let pdata = categorisedData.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.price.toString().includes(search)
    );

    if (short === "az") {
      pdata.sort((a, b) => a.title.localeCompare(b.title));
    } else if (short === "za") {
      pdata.sort((a, b) => b.title.localeCompare(a.title));
    } else if (short === "ascending") {
      pdata.sort((a, b) => a.price - b.price);
    } else if (short === "descending") {
      pdata.sort((a, b) => b.price - a.price);
    }

    return pdata;
  };

const filtered = fillterData();

const paginateData = (array) => {
  const start = (currentPage - 1) * itemPage;
  const end = start + itemPage;
  return array.slice(start, end);
};

const pdata = paginateData(filtered);


  return (
    <Row>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!error && !loading && (
        <>
          <div className="row">
            <Form.Control
              className="col-3"
              id="search"
              type="search"
              placeholder="Search products"
              onChange={(e) => setSearch(e.target.value)}
            ></Form.Control>

            <select
              className="col-3"
              name="short"
              id="short"
              onChange={(e) => setShort(e.target.value)}
            >
              <option value="0">-- select short ---</option>
              <option value="az">a-z</option>
              <option value="za">z-a</option>
              <option value="ascending">Price :low to high</option>
              <option value="descending"> Price :high to low</option>
            </select>
          </div>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant={category === "" ? "primary" : "secondary"}
              onClick={() => setCategory("")}
            >
              All
            </Button>

            {uniquedata.map((v) => (
              <Button
                variant={category === v ? "primary" : "secondary"}
                onClick={() => setCategory(v)}
              >
                {v}
              </Button>
            ))}
          </ButtonGroup>

          {pdata.map((v, i) => (
            <div className="col-3" key={i}>
              <div className="data">
                <Card>
                  <Card.Img variant="top" src={v.image} />
                  <Card.Body>
                    <Card.Title>
                      <span>Title : </span>
                      {v.title}
                    </Card.Title>
                    <Card.Text>
                      <span>Price : </span>
                      {v.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
          <div className="page">
              <Pagination>
            <Pagination.Prev  onClick={()=>handlePrev()} />
            {Array.from({ length: 4 }).map((v, i) => (
              <Pagination.Item linkStyle={{textDecoration: i===currentPage-1 ? "underline":"none"}} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={()=>handleNext()}  />
          </Pagination>
              </div>
        </>
      )}
    </Row>
  );
}

export default Product;
