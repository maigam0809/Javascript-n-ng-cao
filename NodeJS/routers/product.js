import express from 'express';

const router = express.Router();

// list products
router.get('/products', (req, res) =>{
    res.json({
        message: "Successfully"
    })

    // console.log('Successfully');
})


// Product detail
router.get('/product/:id', (req,res) =>{
    res.json({
        id: req.params.id,
        name: 'Product 1'
        
    })
    
})

// Add products
router.post('/products',(req,res) =>{
    console.log(req.body);
    
})

module.exports = router;
