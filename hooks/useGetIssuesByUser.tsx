import { getIssuesByUser } from "@/service/issue.service";
import { useAuthStore } from "@/state/auth.state";
import { useQuery } from "@tanstack/react-query";

const useGetIssuesByUser = () => {
  const { token } = useAuthStore();
  return useQuery({
    queryKey: ["user-issues", token],
    queryFn: () => getIssuesByUser(token),
  });
};

export default useGetIssuesByUser;
