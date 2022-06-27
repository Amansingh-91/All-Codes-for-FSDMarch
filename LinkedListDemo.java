public class LinkedListDemo {
    Node head;
    public class Node{
        String data ;
        Node next;
        Node(String data){
            this.data = data;
            this.next = null;
        }
    }
    LinkedListDemo(){
        this.head = null;
    }
    public void insertInBegin(String data){
        if(head == null){
           head = new Node(data);
        }
        else{
            Node temp = new Node(data);
            temp.next= this.head;
            this.head = temp;
        }
    }
    public void insertAtEnd(String data){
        if(head == null){
            head = new Node(data);
        }
        else{
            Node temp  = head;

            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = new Node(data);
        }
    }
    public void display(){
        if(head == null){
            System.out.println("Linked list is empty");
        }
        else {
            Node temp = head;
            while (temp != null){
                System.out.print(temp.data+"->");
                temp = temp.next;
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        LinkedListDemo ll =  new LinkedListDemo();
        ll.insertInBegin("Aman");
        ll.insertInBegin("Divya");
        ll.insertInBegin("Dharam");
        ll.display();
        ll.insertAtEnd("Tim");
        ll.insertAtEnd("Joy");
        ll.display();


    }

}
