import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Container, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Results = (props) => {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const {
    sepalLength,
    sepalWidth,
    petalLength,
    petalWidth,
    epoch,
    learningRate,
  } = (props.location && props.location.state) || {};
  const apiUrl = "http://localhost:5000/run";
  //runs once after the first rendering of page
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(apiUrl)
        .then((result) => {
          setData(result.data);
          setShowLoading(false);
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <div className="text-center">
          <div>
            {showLoading === false ? (
              <div className="text-center">
                            
                {showLoading && (
                  <Spinner animation="border" role="status"></Spinner>
                )}
                <h1>PREDICTION RESULTS</h1>
                <ul style={{ listStyleType: "none" }}>
                  <li>sepal length: {sepalLength} </li>
                  <li>sepal width: {sepalWidth}</li>
                  <li>petal length: {petalLength}</li>
                  <li>petal width: {petalWidth}</li>
                  <li>epoch: {epoch}</li>
                  <li>learning rate: {learningRate}</li>
                </ul>
                <p>
                  <b>#setosa = 1,0,0</b> <b>#virginica = 0,1,0 </b>
                  <b>#versicolor = 0,0,1 </b>
                </p>
                <ListGroup>
                  {data.row1.map((item, idx) => (
                    <ListGroup.Item
                      style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                      }}
                      key={idx}
                    >
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                            
                <div className="text-center">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="/"
                    activeClassName="active"
                  >
                    GO BACK
                  </NavLink>
                </div>
                                         
              </div>
            ) : (
              <div>
                          
                {showLoading && (
                  <Spinner animation="border" role="status"></Spinner>
                )}
                        
              </div>
            )}
               
          </div>
        </div>
         
      </Container>
    </>
  );
};
export default Results;
