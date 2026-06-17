public class BankManagementSystem {

    public static void main(String[] args) {

        // Creating objects
        SavingsAccount sa = new SavingsAccount(
                "SA101",
                "Rahul Sharma",
                10000);

        CurrentAccount ca = new CurrentAccount(
                "CA201",
                "Priya Singh",
                20000);

        // Deposit money
        sa.deposit(5000);
        ca.deposit(3000);

        // Display Savings Account Details
        System.out.println("===== Savings Account =====");
        sa.displayDetails();
        System.out.println("Interest: ₹" + sa.calculateInterest());

        System.out.println();

        // Display Current Account Details
        System.out.println("===== Current Account =====");
        ca.displayDetails();
        System.out.println("Interest: ₹" + ca.calculateInterest());
    }
}