import { useQuery } from "@tanstack/react-query";
import { searchIssues } from "@/service/issue.service";
import { useAuthStore } from "@/state/auth.state";

const useGetSearchedIssues = (search: string) => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: ["searched-issues", search],
    queryFn: () => searchIssues(search, token!),
  });
};

export default useGetSearchedIssues;
