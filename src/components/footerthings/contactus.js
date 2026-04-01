import React, { useState } from "react";
import { Row, Col, Input, Button, Form } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { contactus } from "../../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactus.css";

function Contactus() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await contactus.post("/", values);
      toast.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      toast.error("Failed to send message. Try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="contact-container">
        <Row justify="center">
          <Col xs={24} md={15} className="form-column">
            <h1 className="form-title">
              Any Packaging Idea in Your Mind? Send us your message today!
            </h1>
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <Form.Item
                name="fullName"
                rules={[{ required: true, message: "Full name is required" }]}
              >
                <Input
                  placeholder="Full name"
                  className="inputborder-contact"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Valid email is required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  className="inputborder-contact"
                />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                rules={[
                  { required: true, message: "Phone number is required" },
                  {
                    pattern: /^[0-9]{10,15}$/,
                    message: "Please enter a valid phone number (10-15 digits)",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your phone"
                  className="inputborder-contact"
                />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[{ required: true, message: "Message cannot be empty" }]}
              >
                <Input.TextArea
                  placeholder="Your message"
                  rows={4}
                  className="textarea-border-contact"
                />
              </Form.Item>
              <Form.Item>
                <div className="btn-main-contact">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-contact"
                    loading={loading}
                  >
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>

          <Col xs={24} md={9} className="info-column">
            <div className="info-item">
              <FaPhoneAlt style={{ fontSize: "26px" }} />
              <a href="tel:+447745807425" className="info-text">
                077 45807425
              </a>
            </div>
            <div className="info-item">
              <IoMail style={{ fontSize: "26px" }} />
              <a href="mailto:support@sireprinting.co.uk" className="info-text">
                support@sireprinting.co.uk
              </a>
            </div>
            {/* <div className="info-item">
              <IoLocationSharp style={{ fontSize: "26px" }} />
              <span className="info-text1">
                5 South Charlotte Street Edinburgh EH2 4AN
              </span>
            </div> */}
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contactus;
