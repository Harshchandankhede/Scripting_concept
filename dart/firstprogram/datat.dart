import 'dart:io';

void main() {
  print("1,Enter First Number=");
  //   int num1 = int.parse(stdin.readLineSync()!);
  int num1 = int.parse(stdin.readLineSync()!);

  print("2,Enter second number");
  int num2 = int.parse(stdin.readLineSync()!);

  int sum = num1 + num2;
  print(sum);
}
