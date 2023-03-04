import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
  Box,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./LoginAdmin.module.css";

function LoginAdmin() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const { logoutUser } = useContext(AuthContext);

  const submitLogin = async () => {
    setload(true);
    // console.log(load);
    try {
      setload(true);
      let res = await fetch(`https://indiweb-api-json.vercel.app/admin`);
      let data = await res.json();
      // console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].password === password) {
          Auth = true;
          localStorage.setItem("adminAuth", data[i].name);
          break;
        }
      }
      setload(false);
      if (Auth === false) {
        alert("Please enter right email or password!");
      } else {
        alert("Login Successfull!");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      setload(false);
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
          Admin Log in
        </Heading>
        <FormControl className={styles.main_form}>
          <Box className={styles.form_input}>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              required
            />
            <span>
              It should be a valid email address! eg. example1221@gmail.com
            </span>
          </Box>
          <Box className={styles.form_input}>
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password Address"
              type="password"
              required
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            />
            <span>
              Password should be 8-15 characters and include at least 1 letter,
              1 number and 1 special character!
            </span>
          </Box>
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

export default LoginAdmin;
