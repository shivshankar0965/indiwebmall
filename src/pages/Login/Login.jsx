import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./Login.module.css";

function Login() {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  
  const submitLogin = async () => {
    setload(true);
    console.log(load);
    try {
      let res = await fetch(`https://mockserver-fhbg.onrender.com/users`);
      let data = await res.json();
      console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].Password === Password) {
          Auth = true;
          loginUser(data[i].name);
          console.log(data[i].name);
          break;
        }
      }
      setload(false);
      if (Auth === false) {
        alert("Please enter right email or password!");
      } else {
        alert("Login Successfull!");
        navigate("/");
      }
      console.log(Auth);
    } catch (error) {
      setload(false);

      console.log(error);
    }
    setemail("");
    setPassword("");
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading
          fontFamily="cursive"
          color="rgb(255, 81, 0)"
          textAlign="center"
        >
          Log in
        </Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
          />

          <FormLabel>Password</FormLabel>
          <Input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password Address"
            type="password"
          />
          <FormHelperText>
            We'll never share your Email & Password.
          </FormHelperText>
          <FormHelperText>
            If have no account click{" "}
            <Link color="rgb(255, 81, 0)" href="/signup">
              Signup
            </Link>
          </FormHelperText>
          <Button
            w="20%"
            marginLeft="42%"
            marginTop="30px"
            color="white"
            background="rgb(255, 81, 0)"
            onClick={submitLogin}
          >
            <span className={styles.loginButton}>Log in</span>
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;
