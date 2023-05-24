import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";

type Props = CircularProgressProps & {
  index: number;
  total: number;
};

export function TransactionCircularProgress({ index, total, ...props }: Props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="indeterminate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {total > 1 && (
          <Typography variant="caption" component="div" color="text.secondary">
            {index + 1}/{total}
          </Typography>
        )}
      </Box>
    </Box>
  );
}