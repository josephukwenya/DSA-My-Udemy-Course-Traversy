import java.util.HashMap;
import java.util.Map;

public class Solution {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int compliment = target - nums[i];
            
            if (numMap.containsKey(compliment)) {
                return new int[]{numMap.get(compliment), i};
            }
            
            numMap.put(nums[i], i); // Store the number and its index
        }
        
        return new int[]{}; // Return empty array if no solution is found
    }

    public static void main(String[] args) {
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println("[" + result[0] + ", " + result[1] + "]");
    }
}
