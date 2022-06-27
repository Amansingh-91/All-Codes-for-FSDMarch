public class BinaryTree {
    // Node root;
    class Node{
        Node leftChild;
        Node rightChild;
        String data;
        Node(String data){
            this.data = data;
            leftChild = null;
            rightChild = null;
        }
    }
    public void Inorder(Node root){
        if(root == null){
            return;

        }
        Inorder(root.leftChild);
        System.out.print(root.data +" ");
        Inorder(root.rightChild);
    }
    public void Preorder(Node root){
        if(root == null){
            return;

        }
        System.out.print(root.data +" ");
        Preorder(root.leftChild);
        Preorder(root.rightChild);
    }
    public void Postorder(Node root){
        if(root == null){
            return;

        }
        
        Postorder(root.leftChild);
        Postorder(root.rightChild);
        System.out.print(root.data +" ");
    }
    
    public static void main(String[] args) {
        BinaryTree t1 = new BinaryTree();
        Node root =  t1.new Node("A");
        
        root.leftChild = t1.new Node("B");
        root.rightChild = t1.new Node("C");
        root.leftChild.rightChild = t1.new Node("D");
        root.rightChild.leftChild = t1.new Node("E");
        t1.Inorder(root);
        System.out.println();
        t1.Preorder(root);
        System.out.println();
        t1.Postorder(root);
        System.out.println();



    }
}
