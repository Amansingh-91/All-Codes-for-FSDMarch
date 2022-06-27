import java.util.LinkedList;
import java.util.Queue;

public class BST {
    Node root;
    class Node{
        int data;
        Node left;
        Node right;
        Node(int data){
            this.data =  data; 
            left = null;
            right =  null;
        }
    }
    public void insert(int data){
        root =insertRec(root, data);
    }
    public Node  insertRec(Node root,int data){
        if(root == null){
            root =  new Node(data);
            return root;
        }
        if( root.data <= data){
            root.right = insertRec(root.right, data);
        }else{
            root.left =  insertRec(root.left, data);
        }
        return root;
    }
    public void Inorder(Node root){
        if(root == null){
            return;

        }
        Inorder(root.left);
        System.out.print(root.data +" ");
        Inorder(root.right);
    }
    public void delete(int data){
        root = deleteRec(root,data);
    }
    public Node deleteRec(Node root, int key){
        if (root == null){
            return root;
        }
        else if(root.data > key){
            root.left =  deleteRec(root.left, key);
        }
        else if(root.data < key){
            root.right =  deleteRec(root.right, key);
        }
        else{
            if(root.left == null){
                return root.right;
            }
            else if(root.right == null){
                return root.left;
            }
            else{
                // Node parent = root.left;
                // Node pre = inorderPredecessor(parent);
                // root.data = pre.data ;
                // parent = deleteRec(parent, pre.data);
                Node parent = root.right;
                Node successor = inorderSuccessor(parent);
                root.data = successor.data ;
                parent = deleteRec(parent, successor.data);
                
            }
        }
        return root;
    }
    public Node inorderPredecessor(Node root){
        if(root.right == null){
            return root;
        }
        return inorderPredecessor(root.right);
    }
    public Node inorderSuccessor(Node root){
        if(root.left == null){
            return root;
        }
        return inorderSuccessor(root.left);
    }
    public void BFS(Node root){
        if(root != null){
            Queue<Node> q1 =  new LinkedList<>();
            q1.add(root);
            while(!q1.isEmpty()){
                Node temp = q1.poll();
                System.out.print(temp.data+ " ");
                if(temp.left != null){
                    q1.add(temp.left);
                }
                if(temp.right != null){
                    q1.add(temp.right);
                }
            }
            System.out.println();
        }
        else{
            System.out.println("Tree is empty");
        }

    }
    public static void main(String[] args) {
        BST t1 = new BST();
        t1.insert(4);
        t1.insert(2);
        t1.insert(6);
        t1.insert(1);
        t1.insert(3);
        t1.insert(5);
        t1.insert(7);
        t1.Inorder(t1.root);
        System.out.println();
        t1.BFS(t1.root);
        // System.out.println(t1.inorderSuccessor(t1.root.right).data);
        // // System.out.println(t1.inorderPredecessor(t1.root.left).data);
        // t1.delete(4);
        // t1.Inorder(t1.root);
        // System.out.println();
        // System.out.println(t1.root.data);
        // t1.delete(8);
        // t1.Inorder(t1.root);
        // System.out.println();
    }
}
