import { getIssues } from "@/service/issue.service";
import { useAuthStore } from "@/state/auth.state";
import { useQuery } from "@tanstack/react-query";

const useGetIssues = () => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: [],
    queryFn: () => getIssues(token),
  });
};

export default useGetIssues;
