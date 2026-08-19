console.log(
"LOGIN JWT SECRET:",
process.env.JWT_SECRET
);

const token = jwt.sign(
{
id: user._id,
email: user.email,
},
process.env.JWT_SECRET,
{
expiresIn: "1d",
}
);

res.json({
message: "Login successful",
token,
user: {
id: user._id,
name: user.name,
email: user.email,
},
});
