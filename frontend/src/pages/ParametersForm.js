import React, { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";

const ParametersForm = (props) => {
  const [state, setState] = useState({
    sepalLength: "",
    sepalWidth: "",
    petalLength: "",
    petalWidth: "",
    epoch: "",
    learningRate: "",
  });
  //
  const apiUrl = "http://localhost:5000/parameters";
  //
  const [showLoading, setShowLoading] = useState(false);

  const handleOnSubmit = (event) => {
    setShowLoading(true);
    event.preventDefault();
    props.history.push({
      pathname: "/results",
      state,
    });
  };

  const onChange = (e) => {
    e.persist();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  //
  return (
    <>
      <Container>
        <div className="text-center">
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
              width: "50vw",
              height: "50vh",
            }}
          >
            <h1>TEST PARAMETERS FORM</h1>
            {showLoading && (
              <Spinner animation="border" role="status"></Spinner>
            )}
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".1"
                  name="sepalLength"
                  id="sepalLength"
                  placeholder="Enter Sepal Length (ex 0.1)"
                  value={state.sepalLength}
                  onChange={onChange}
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".1"
                  name="sepalWidth"
                  id="sepalWidth"
                  placeholder="Enter Sepal Width (ex 0.1)"
                  value={state.sepalWidth}
                  onChange={onChange}
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".1"
                  name="petalLength"
                  id="petalLength"
                  placeholder="Enter Petal Length (ex 0.1)"
                  value={state.petalLength}
                  onChange={onChange}
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".1"
                  name="petalWidth"
                  id="petalWidth"
                  placeholder="Enter Petal Width (ex 0.1)"
                  value={state.petalWidth}
                  onChange={onChange}
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step="any"
                  name="epoch"
                  id="epoch"
                  placeholder="Enter Epoch (ex 100)"
                  value={state.epoch}
                  onChange={onChange}
                />
              </Form.Group>
              {/* */}
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="number"
                  step=".01"
                  name="learningRate"
                  id="learningRate"
                  placeholder="Enter Learning Rate (ex 0.01)"
                  value={state.learningRate}
                  onChange={onChange}
                />
              </Form.Group>
              <Button
                style={{
                  border: "none",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "15px",
                  fontWeight: "bold",
                  margin: "10px",
                }}
                variant="primary"
                type="submit"
              >
                EVALUATE
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};
export default ParametersForm;
