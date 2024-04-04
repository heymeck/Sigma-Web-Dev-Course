#include <stdio.h>
int table(int n){
    for(int i=1;i<=10;i++){
        printf("%d x %d = %d\n",n,i,n*i);
    }
    return 0;
}
int main(){
    printf("hello world\n");
    int n;
    printf("Enter a no you want to print table of \n");
    scanf("%d",&n);
    table(n);

    return 0;
}