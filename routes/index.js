var express = require('express');
var router = express.Router();
const { checktoken } = require('../middleware/auth');
const { register,login } = require('../controller/adminController');
const { allProducts, GetProducts, singleProduct, searchProduct, LimitSkip, categories, searchCat, DeleteProduct, updateProduct } = require('../controller/productsController');
const { addCart, singleCart, updateCart, cartUser, deleteCart, getCart } = require('../controller/cartController');
const { allUsers, getUsers, singleUser, searchUser, filterUser, limitSkipUser, allCart, updateUser, deleteUser, userPost, userTodo } = require('../controller/user1Controller');
const { allPost, singlePost, getAllpost, searchPost, limitPost, findByUid, updatePost, deletePost, postComment } = require('../controller/postController');
const { addComment, allComment, singleComment, limitComment, commentByPid, updateComment, DeleteComment } = require('../controller/commentController');
const { addTodo, getTodo, singleTodo, randomTodo, limitTodo, todoUid, updateTodo, deleteTodo } = require('../controller/todoController');
const { addQuote, getQuote, singleQuote, randomQuote, limitQuote } = require('../controller/quoteController');

// ===============================================
//               Authentication Routing 
// ===============================================

router.post('/',register);
router.get('/login',login);

// ================================================
//                   PRODUCTS API
// ================================================ 

// --- Add & Get Products  ---

router.post('/allproducts',allProducts);
router.get('/products',GetProducts)

// --- Single Product ---

router.get('/products/:id',singleProduct);

// --- Search Product ---

router.get('/searchproduct',searchProduct)

// --- Limit & Skip Products ---

router.get('/limitskip',LimitSkip)

// --- Product Categories ---

router.get('/categories',categories)

// --- Search Product Category ---

router.get('/searchcategory',searchCat)

// --- Update Product By Title ---

router.put('/productsupdate/:id',updateProduct)

// --- Delete Product ---

router.delete('/productdelete/:id',DeleteProduct)

// ===============================================
//                   CART API
// ===============================================

// --- Add Cart ---

router.post('/addcart/:id',addCart)

// --- Get All Cart By UserId ---

router.get('/getcart/:id',getCart)

// --- Single Cart ---

router.get('/singlecart/:id',singleCart)

// --- Cart Of Single User ---

router.get('/singleusercart/:id',cartUser)

// --- Update Cart ---

router.put('/updatecart/:id',updateCart)

// --- Delete Cart ---

router.delete('/deletecart/:id',deleteCart)


// ===========================================
//                  USER API
// ===========================================


// --- Add All Users ---

router.post('/users',allUsers)

// --- Get All Users ---

router.get('/getusers',getUsers)

// --- Get Single User By Id ---

router.get('/getusers/:id',singleUser)

// --- Search User By Name ---

router.get('/usersearch',searchUser)

// --- Filter Users ---

router.get('/userfilter',filterUser)

// --- Limit & Skip User ---

router.get('/userlimitskip',limitSkipUser)

// --- User Cart ----

router.get('/getuserscart/:id',allCart)

// --- User's Posts ---

router.get('/userpost/:id',userPost)

// --- User's Todos ---

router.get('/usertodo/:id',userTodo)

// --- Update User Data ---

router.put('/updateuser/:id',updateUser)

// --- Delete User ---

router.delete('/deleteuser/:id',deleteUser)

// ==========================================
//                POST API
// ===========================================

// --- Add Post ---

router.post('/addpost/:id',allPost)

// --- Get Single Post ---

router.get('/getpost/:id',singlePost)

// --- Get All Post ---

router.get('/allpost',getAllpost)

// --- Serach Post ---

router.get('/searchpost',searchPost)

// --- Limit & Skip ---

router.get('/limitpost',limitPost)

// --- Find By UserId ---

router.get('/findbyuid/:id',findByUid)

// --- Post's Comments ---

router.get('/postcomment/:id',postComment)

// --- Update Post ---

router.put('/updatepost/:id',updatePost)

// --- Delete Post ---

router.delete('/deletepost/:id',deletePost)

// ==========================================
//             COMMENTS API
// ==========================================

// --- Add Comment Data ---

router.post('/addcomment/:id',addComment)

// --- Get All Comments --- 

router.get('/allcomments',allComment)

// --- Get Single Comment Data ---

router.get('/singlecomment/:id',singleComment)

// --- Limit & Skip Comments ---

router.get('/limitcomment',limitComment)

// --- Comment By PostId ---

router.get('/commentbypostid/:id',commentByPid)

// --- Update Comment Data ---

router.put('/updatecomment/:id',updateComment)

// --- Delete Comment ---

router.delete('/deletecomment/:id',DeleteComment)

// ===============================================
//                  TODOS API
// ================================================

// --- Add Todo ---

router.post('/addtodo/:id',addTodo)

// --- Get All Todo ---

router.get('/gettodo',getTodo)

// --- Single Todo ---

router.get('/singletodo/:id',singleTodo)

// --- Random Todo Data ---

router.get('/randomtodo',randomTodo)

// --- Limit & Skip ---

router.get('/limittodo',limitTodo)

// --- Todo By UserId ---

router.get('/todobyuserid/:id',todoUid)

// --- Update Todo Data ---

router.put('/updatetodo/:id',updateTodo)

// --- Delete Todo ---

router.delete('/deletetodo/:id',deleteTodo)

// ==============================================
//                QUOTE API
// ===============================================

// --- Add Quote Data ---

router.post('/addquote',addQuote)

// --- Get All Quote ---

router.get('/allquote',getQuote)

// --- Single Quote ---

router.get('/singlequote/:id',singleQuote)

// --- Random Quote ---

router.get('/randomquote',randomQuote)

// --- Limit & Skip Quote ---

router.get('/limitquote',limitQuote)


module.exports = router;
