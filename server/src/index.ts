import { PrismaClient } from "@prisma/client";
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { BlogController } from "../controllers/Blog.controller";
import { UserController } from "../controllers/User.controller";
import { SettingController } from "../controllers/Setting.controller";
import { BookController } from "../controllers/Book.controller";
import { SubmissionController } from "../controllers/Submission.controller";
import { CheckoutController } from "../controllers/Checkout.controller";
import { OthersController } from "../controllers/Others.controller";
import { TestimonialController } from "../controllers/Testimonial.controller";
import { CaptchaController } from "../controllers/Captcha.controller";

dotenv.config();

const db = new PrismaClient();


const app = express()

app.use(express.json())

app.use(cors())

app.use("/api/blog", BlogController);
app.use("/api/settings", SettingController)
app.use("/api/othersettings", OthersController)
app.use("/api/book", BookController)
app.use("/api/testimonials", TestimonialController)
app.use("/api", UserController)
app.use("/api/submissions", SubmissionController)
app.use("/api/checkout", CheckoutController)
app.use("/api/captcha", CaptchaController)

app.use("/images", express.static("uploads"))


app.listen(3030, () => {
  console.log(`Server running on http://localhost:3030`);
});