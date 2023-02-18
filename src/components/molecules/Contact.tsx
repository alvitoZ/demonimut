import { Input } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import Button from "../atoms/Button";
import ImageContent from "./ImageContent";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      {/* <div className={`${styles.container}`}> */}
      <div className="flex space-x-12 justify-beetween pb-20">
        <div className={`${styles.ImageContent}`}>
          {/* <div className={`${styles.ImageContent}`}> */}
          <ImageContent />
        </div>
        <div className={`${styles.form} pt-16`}>
          {/* <div className="pt-20"> */}
          <h1 className={`${styles.h1}`}>Get in touch today</h1>
          <p className={`${styles.p} text-sm pt-2.5`}>Keep in touch with us!</p>
          <div className="pt-11 flex flex-wrap w-3/4">
            <div>
              <Input title="Name" type="text" placeholder="John Carter" />
              <Input
                title="Email"
                type="email"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <Input title="Phone" type="text" placeholder="(123) 456 - 789" />
              <Input title="Company" type="text" placeholder="Facebook" />
            </div>
            <div>
              <TextArea
                title="Message"
                placeholder="Please type your message here..."
              />
            </div>
            <div className="pt-8">
              <Button title="Send message" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
