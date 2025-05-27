import { getIssueById } from "@/service/issue.service";
import { useAuthStore } from "@/state/auth.state";
import { useQuery } from "@tanstack/react-query";

const useGetIssueById = (id: string) => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: ["issue", id],
    queryFn: () => getIssueById(id, token!),
  });
};

export default useGetIssueById;
