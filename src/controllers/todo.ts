
export const addTodo = (req,res) => {
   try {
     const {title} = req.body;
    res.json(title)
   } catch (error) {
     res.status(500).json(error)
   }
}